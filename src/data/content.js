// Single source of truth for all portfolio content.
// Edit text here; components only handle presentation.

export const profile = {
  name: 'Sivapriya Balakrishnan',
  role: 'Computer Science and Mathematics graduate',
  roles: ['Software Developer', 'Generative AI'],
  intro:
    'Computer Science and Mathematics graduate, building practical software and exploring Generative AI, from backend foundations to retrieval-powered applications.',
  focus: ['Software Development', 'Generative AI'],
  languages: ['English', 'Hindi', 'Malayalam'],
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  title: 'Logic, language and a taste for useful things.',
  paragraphs: [
    'I studied Computer Science and Mathematics, and that pairing shapes how I build: start with a solid foundation, then make it clear and dependable.',
    'My ground is Python, SQL and backend development. Lately I have been exploring Generative AI, working with large language models, vector databases and Retrieval-Augmented Generation to build applications that answer from real documents.',
    'I care most about software that is practical, and I am looking for opportunities to grow as a developer.',
  ],
}

export const skills = [
  { title: 'Programming Languages', items: ['Python', 'SQL', 'Java', 'JavaScript', 'PHP'] },
  {
    title: 'Backend and Web Development',
    items: ['REST API Fundamentals', 'MySQL', 'HTML5', 'CSS3', 'Responsive Web Design'],
  },
  {
    title: 'AI and Generative AI',
    items: [
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Prompt Engineering',
      'Text Embeddings',
      'Semantic Search',
    ],
  },
  {
    title: 'AI Frameworks and Tools',
    items: [
      'LangChain',
      'LlamaIndex',
      'Sentence Transformers',
      'ChromaDB',
      'Gemini API',
      'OpenAI API',
      'Ollama',
    ],
  },
  { title: 'Developer Tools', items: ['Git', 'GitHub'] },
]

export const projects = [
  {
    id: 'research-assistant',
    title: 'Research Paper & Technical Document Assistant',
    overview:
      'A RAG application for querying PDF documents, with answers cited by source filename and page number.',
    technologies: ['Python', 'RAG', 'ChromaDB', 'Streamlit', 'PyMuPDF', 'Sentence Transformers'],
    features: [
      'Source filename and page-number citations for answers.',
      'PDF extraction, overlapping chunking, MiniLM embeddings and persistent ChromaDB storage.',
      'Duplicate detection.',
      'Reduced hallucinations through relevance filtering, context-grounded prompts and insufficient-evidence handling.',
      'Multiple LLM providers integrated: OpenAI, Google Gemini and Ollama.',
      'More than 50 pytest tests covering core functionality, API failures and PDF processing errors.',
    ],
  },
  {
    id: 'queue-appointments',
    title: 'Queue & Appointment Management System',
    overview:
      'A web-based appointment and queue management interface for hospitals and service-based businesses.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Appointment scheduling.', 'Responsive UI components.', 'Backend data handling.'],
  },
]

export const education = [
  {
    period: '2023–2026',
    institution: 'Kristu Jayanti (Deemed to be University)',
    details: ['B.Sc. in Computer Science and Mathematics', 'CGPA: 7.06/10'],
  },
  {
    period: '2022–2023',
    institution: 'Nithyananda Bhavan English Medium School',
    details: ['Class XII – Computer Science'],
  },
]

export const certifications = [
  {
    title: 'Data Science and Data Analytics with AI — Career Training',
    issuer: 'Besant Technologies',
    status: 'Currently pursuing',
  },
  { title: 'IBM RAG and Agentic AI Professional Certificate', issuer: 'Coursera' },
  { title: 'Introduction to Back-End Development', issuer: 'Meta' },
]

export const github = {
  heading: 'Code, in the open.',
  lead: 'My repositories, experiments and projects live on GitHub.',
  // TODO: replace with your real GitHub profile URL and handle.
  href: 'https://github.com/your-username',
  label: 'github.com/your-username',
}

export const contact = {
  heading: 'Let’s build something thoughtful.',
  lead: 'Whether you are hiring or just curious about my work, I would be glad to hear from you.',
  email: 'sivapriyabalakrish@gmail.com',
  linkedin: {
    href: 'https://www.linkedin.com/in/sivapriya-balakrishnan',
    label: 'linkedin.com/in/sivapriya-balakrishnan',
  },
  location: 'Bengaluru, India',
}
