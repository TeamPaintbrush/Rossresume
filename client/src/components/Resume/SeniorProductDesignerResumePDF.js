import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { BulletLine, ContactRow, PageFooter } from './ResumePDFShared';

// Senior Product Designer variant.
// Clean, ATS-safe, one restrained accent. Leads with shipped product work,
// then experience, then a product-framed skills grid. Consumes the same data
// shape as the other templates (pass `productDesignerResume`).

const ACCENT = '#0e5c73';

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 48,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.35,
    color: '#333333',
    backgroundColor: '#ffffff',
  },
  header: { marginBottom: 16, borderBottom: `2px solid ${ACCENT}`, paddingBottom: 12 },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#111111',
    lineHeight: 1.2,
    marginBottom: 6,
    letterSpacing: 1,
  },
  title: { fontSize: 10.5, color: ACCENT, fontFamily: 'Helvetica-Bold', marginBottom: 9 },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', fontSize: 9, color: '#444444' },
  separator: { color: '#bbbbbb', marginHorizontal: 6 },
  link: { color: '#333333', textDecoration: 'none' },

  section: { marginBottom: 13 },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    marginBottom: 7,
    paddingBottom: 2,
    borderBottom: `1px solid ${ACCENT}`,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  summary: { fontSize: 9.5, color: '#333333', lineHeight: 1.5 },

  // Featured product entries — full width, roomy.
  featureItem: { marginBottom: 9 },
  featureName: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: '#111111', marginBottom: 1.5 },
  featureDesc: { fontSize: 9, color: '#3f3f3f', lineHeight: 1.4, marginBottom: 1.5 },
  featureTech: { fontSize: 8.5, color: ACCENT },
  featureLink: { fontSize: 8.5, color: '#555555', textDecoration: 'none', marginTop: 1 },

  columnsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  columnItem: { width: '47%', marginBottom: 9 },

  skillCategoryTitle: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: '#111111', marginBottom: 3 },
  bulletRow: { marginBottom: 2.5, paddingLeft: 4 },
  bulletDot: { color: ACCENT, fontSize: 9 },
  bulletText: { fontSize: 9, color: '#444444', lineHeight: 1.35 },

  experienceItem: { marginBottom: 11 },
  jobHeader: { marginBottom: 4 },
  jobTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 1 },
  jobTitle: { fontSize: 10.5, fontFamily: 'Helvetica-Bold', color: '#111111', flex: 1, paddingRight: 10 },
  dates: { fontSize: 9, color: '#555555', flexShrink: 0 },
  companyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  company: { fontSize: 9.5, fontFamily: 'Helvetica-Oblique', color: '#333333', flex: 1, paddingRight: 10 },
  location: { fontSize: 9, color: '#555555', flexShrink: 0 },

  degree: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: '#111111' },
  school: { fontSize: 9.5, color: '#333333' },
  eduDetails: { fontSize: 9, color: '#555555' },

  itemName: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: '#111111', marginBottom: 1 },
  itemMeta: { fontSize: 8.5, color: '#555555' },
});

const KEEP_WITH_NEXT = 92;

const SeniorProductDesignerResumePDF = ({ data }) => {
  const featured = (data.topProjects || []).slice(0, 3);
  const rest = (data.topProjects || []).slice(3);

  return (
    <Document title={`${data.personal.name} — Senior Product Designer`} author={data.personal.name} subject={data.personal.title}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.name.toUpperCase()}</Text>
          <Text style={styles.title}>{data.personal.title}</Text>
          <ContactRow
            style={styles.contactRow}
            separatorStyle={styles.separator}
            items={[
              <Text>{data.personal.location}</Text>,
              <Link src={`mailto:${data.personal.email}`} style={styles.link}>{data.personal.email}</Link>,
              <Link src={`https://${data.personal.linkedin}`} style={styles.link}>{data.personal.linkedin}</Link>,
              <Link src={`https://${data.personal.website}`} style={styles.link}>{data.personal.website}</Link>,
              <Link src={`https://${data.personal.behance}`} style={styles.link}>{data.personal.behance}</Link>,
            ]}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={KEEP_WITH_NEXT}>Selected Product Work</Text>
          {featured.map((p, i) => (
            <View key={i} style={styles.featureItem} wrap={false}>
              <Text style={styles.featureName}>{p.name}</Text>
              <Text style={styles.featureDesc}>{p.description}</Text>
              <Text style={styles.featureTech}>{p.tech.join('  ·  ')}</Text>
              {p.link && (
                <Link src={p.link} style={styles.featureLink}>
                  {p.link.replace(/^https?:\/\//, '')}
                </Link>
              )}
            </View>
          ))}
          {rest.length > 0 && (
            <View style={styles.columnsRow}>
              {rest.map((p, i) => (
                <View key={i} style={styles.columnItem} wrap={false}>
                  <Text style={styles.itemName}>{p.name}</Text>
                  <Text style={styles.featureDesc}>{p.description}</Text>
                  <Text style={styles.featureTech}>{p.tech.join('  ·  ')}</Text>
                  {p.link && (
                    <Link src={p.link} style={styles.featureLink}>
                      {p.link.replace(/^https?:\/\//, '')}
                    </Link>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={KEEP_WITH_NEXT}>Experience</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.jobHeader} wrap={false} minPresenceAhead={40}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>{exp.role}</Text>
                  <Text style={styles.dates}>{exp.dates}</Text>
                </View>
                <View style={styles.companyRow}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.location}>{exp.location}</Text>
                </View>
              </View>
              {exp.achievements.map((a, idx) => (
                <BulletLine key={idx} rowStyle={styles.bulletRow} dotStyle={styles.bulletDot} textStyle={styles.bulletText}>
                  {a}
                </BulletLine>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={KEEP_WITH_NEXT}>Skills</Text>
          <View style={styles.columnsRow}>
            {Object.entries(data.skills).map(([category, skills], index) => (
              <View key={index} style={styles.columnItem} wrap={false}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                {skills.slice(0, 5).map((skill, idx) => (
                  <BulletLine key={idx} rowStyle={styles.bulletRow} dotStyle={styles.bulletDot} textStyle={styles.bulletText}>
                    {skill.split(' - ')[0]}
                  </BulletLine>
                ))}
              </View>
            ))}
          </View>
        </View>

        {data.aiTools && data.aiTools.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle} minPresenceAhead={KEEP_WITH_NEXT}>AI Tools &amp; Automation</Text>
            <View style={styles.columnsRow}>
              {data.aiTools.slice(0, 4).map((tool, index) => (
                <View key={index} style={styles.columnItem} wrap={false}>
                  <Text style={styles.itemName}>{tool.name}</Text>
                  <Text style={styles.featureDesc}>{tool.blurb}</Text>
                  <Text style={styles.featureTech}>{tool.stack.join('  ·  ')}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle} minPresenceAhead={KEEP_WITH_NEXT}>Education &amp; Certifications</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 5 }} wrap={false}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.school}>{edu.school}, {edu.college}</Text>
              <Text style={styles.eduDetails}>{edu.location} • {edu.year}</Text>
            </View>
          ))}
          <View style={[styles.columnsRow, { marginTop: 4 }]}>
            {data.certifications.map((cert, index) => (
              <View key={index} style={styles.columnItem} wrap={false}>
                <Text style={styles.itemName}>{cert.name}</Text>
                <Text style={styles.itemMeta}>{cert.issuer} • {cert.year}</Text>
              </View>
            ))}
          </View>
        </View>

        <PageFooter />
      </Page>
    </Document>
  );
};

export default SeniorProductDesignerResumePDF;
