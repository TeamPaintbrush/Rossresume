import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Modern/Creative Style with Colors
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    borderBottom: '3px solid #FF6B6B',
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: '#FF6B6B',
    marginBottom: 15,
    fontFamily: 'Helvetica-Oblique',
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    fontSize: 9,
    color: '#555',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: '#4ECDC4',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#2C3E50',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: '2px solid #4ECDC4',
  },
  summary: {
    fontSize: 10,
    color: '#444',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  twoColumnContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    width: '35%',
  },
  rightColumn: {
    width: '65%',
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#FF6B6B',
    marginBottom: 4,
  },
  skillItem: {
    fontSize: 9,
    color: '#555',
    marginBottom: 3,
    paddingLeft: 10,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#2C3E50',
  },
  company: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#FF6B6B',
  },
  dates: {
    fontSize: 9,
    color: '#777',
    fontFamily: 'Helvetica-Oblique',
  },
  location: {
    fontSize: 9,
    color: '#777',
  },
  achievement: {
    fontSize: 9,
    color: '#555',
    marginBottom: 2,
    paddingLeft: 15,
  },
  educationItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#2C3E50',
  },
  school: {
    fontSize: 10,
    color: '#FF6B6B',
  },
  certificationItem: {
    marginBottom: 5,
  },
  certificationName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#2C3E50',
  },
  certificationIssuer: {
    fontSize: 9,
    color: '#555',
  },
  projectItem: {
    marginBottom: 8,
  },
  projectName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#4ECDC4',
  },
  projectDescription: {
    fontSize: 9,
    color: '#555',
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 8,
    color: '#777',
    fontFamily: 'Helvetica-Oblique',
  },
  bullet: {
    color: '#FF6B6B',
  },
});

const ModernResumePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personal.name}</Text>
        <Text style={styles.title}>{data.personal.title}</Text>
        <View style={styles.contactRow}>
          <Text>{data.personal.location}</Text>
          <Text>•</Text>
          <Link src={`mailto:${data.personal.email}`} style={styles.link}>
            {data.personal.email}
          </Link>
          <Text>•</Text>
          <Link src={`https://${data.personal.linkedin}`} style={styles.link}>
            LinkedIn
          </Link>
          <Text>•</Text>
          <Link src={`https://${data.personal.behance}`} style={styles.link}>
            Behance
          </Link>
          <Text>•</Text>
          <Link src={`https://${data.personal.website}`} style={styles.link}>
            {data.personal.website}
          </Link>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      {/* Two Column Layout */}
      <View style={styles.twoColumnContainer}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {Object.entries(data.skills).map(([category, skills], index) => (
              <View key={index} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                {skills.slice(0, 3).map((skill, idx) => (
                  <Text key={idx} style={styles.skillItem}>
                    <Text style={styles.bullet}>• </Text>
                    {skill.split(' - ')[0]}
                  </Text>
                ))}
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.school}>{edu.school}</Text>
                <Text style={styles.location}>{edu.college}</Text>
                <Text style={styles.dates}>{edu.year}</Text>
              </View>
            ))}
          </View>

          {/* Certifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
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

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {data.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.jobHeader}>
                  <View>
                    <Text style={styles.jobTitle}>{exp.role}</Text>
                    <Text style={styles.company}>{exp.company}</Text>
                  </View>
                  <View>
                    <Text style={styles.dates}>{exp.dates}</Text>
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

          {/* Key Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Projects</Text>
            {data.topProjects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <Text style={styles.projectTech}>
                  Tech: {project.tech.join(', ')}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ModernResumePDF;
