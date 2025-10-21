import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Professional/Conservative Style (Black & White)
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2px solid #000000',
    paddingBottom: 12,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 4,
    letterSpacing: 1,
  },
  title: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    fontSize: 9,
    color: '#444',
  },
  separator: {
    color: '#999',
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 6,
    paddingBottom: 2,
    borderBottom: '1px solid #000000',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 10,
    color: '#333',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillCategory: {
    marginBottom: 8,
    width: '48%',
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 9,
    color: '#444',
    marginBottom: 2,
    paddingLeft: 12,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    marginBottom: 3,
  },
  jobTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  dates: {
    fontSize: 9,
    color: '#555',
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  company: {
    fontSize: 10,
    fontFamily: 'Helvetica-Oblique',
    color: '#333',
  },
  location: {
    fontSize: 9,
    color: '#555',
  },
  achievement: {
    fontSize: 9,
    color: '#444',
    marginBottom: 2,
    paddingLeft: 15,
  },
  educationItem: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  school: {
    fontSize: 10,
    color: '#333',
  },
  educationDetails: {
    fontSize: 9,
    color: '#555',
  },
  certificationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  certificationItem: {
    marginBottom: 5,
    width: '48%',
  },
  certificationName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  certificationIssuer: {
    fontSize: 8,
    color: '#555',
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  projectItem: {
    marginBottom: 8,
    width: '48%',
  },
  projectName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  projectDescription: {
    fontSize: 8,
    color: '#444',
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 8,
    color: '#666',
  },
  bullet: {
    color: '#000000',
  },
});

const ProfessionalResumePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personal.name.toUpperCase()}</Text>
        <Text style={styles.title}>{data.personal.title}</Text>
        <View style={styles.contactRow}>
          <Text>{data.personal.location}</Text>
          <Text style={styles.separator}>|</Text>
          <Link src={`mailto:${data.personal.email}`} style={styles.link}>
            {data.personal.email}
          </Link>
          <Text style={styles.separator}>|</Text>
          <Text>{data.personal.linkedin}</Text>
          <Text style={styles.separator}>|</Text>
          <Text>{data.personal.website}</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <View style={styles.jobTitleRow}>
                <Text style={styles.jobTitle}>{exp.role}</Text>
                <Text style={styles.dates}>{exp.dates}</Text>
              </View>
              <View style={styles.companyRow}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
            </View>
            {exp.achievements.map((achievement, idx) => (
              <Text key={idx} style={styles.achievement}>
                <Text style={styles.bullet}>• </Text>
                {achievement}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Competencies</Text>
        <View style={styles.skillsGrid}>
          {Object.entries(data.skills).map(([category, skills], index) => (
            <View key={index} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              {skills.slice(0, 4).map((skill, idx) => (
                <Text key={idx} style={styles.skillItem}>
                  <Text style={styles.bullet}>• </Text>
                  {skill.split(' - ')[0]}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.school}>{edu.school}, {edu.college}</Text>
            <Text style={styles.educationDetails}>
              {edu.location} • {edu.year}
            </Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <View style={styles.certificationsGrid}>
          {data.certifications.map((cert, index) => (
            <View key={index} style={styles.certificationItem}>
              <Text style={styles.certificationName}>{cert.name}</Text>
              <Text style={styles.certificationIssuer}>
                {cert.issuer} • {cert.year}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Key Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Projects</Text>
        <View style={styles.projectsGrid}>
          {data.topProjects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <Text style={styles.projectTech}>
                {project.tech.join(' • ')}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ProfessionalResumePDF;
