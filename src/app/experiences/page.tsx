import { Column, Heading, Meta, Schema, Text, Row, Media } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
// import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      {about.work.display && (
        <>
          <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
            {about.work.title}
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {about.work.experiences?.map((experience, index) => (
              <Column
                key={
                  experience.company || experience.role
                    ? `${experience.company ?? "experience"}-${experience.role ?? index}`
                    : index
                }
                fillWidth
              >
                <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                  <Text id={experience.company} variant="heading-strong-l">
                    {experience.company}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {experience.timeframe}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                  {experience.role}
                </Text>
                <Column as="ul" gap="16">
                  {experience.achievements.map(
                    (achievement: React.ReactNode, index: number) => (
                      <Text
                        as="li"
                        variant="body-default-m"
                        key={`${experience.company}-${experience.role}-${index}`}
                      >
                        {achievement}
                      </Text>
                    ),
                  )}
                </Column>
                {experience.images && experience.images.length > 0 && (
                  <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                    {experience.images.map((image, index) => (
                      <Row
                        key={image.src ?? `${experience.company}-${index}`}
                        border="neutral-medium"
                        radius="m"
                        minWidth={image.width}
                        height={image.height}
                      >
                        <Media
                          enlarge
                          radius="m"
                          sizes={image.width.toString()}
                          alt={image.alt}
                          src={image.src}
                        />
                      </Row>
                    ))}
                  </Row>
                )}
              </Column>
            ))}
          </Column>
        </>
      )}
      {/* <Projects /> */}
    </Column>
  );
}
