export interface Education {
  id: string;
  title: string;
  institution: string;
  type: 'degree' | 'certification' | 'school';
  period: string;
  status?: 'current' | 'completed';
  description?: string;
  icon?: string;
  color: {
    border: string;
    text: string;
    bg: string;
  };
}

export const educationData: Education[] = [
  {
    id: 'associate-cs',
    title: 'Technical Degree in Software Development',
    institution: 'UTN (Universidad Tecnológica Nacional)',
    type: 'degree',
    period: 'Aug 2023 - Sep 2025',
    status: 'completed',
    description: 'Currently pursuing my degree in Computer Science with focus on software development and engineering principles.',
    color: {
      border: 'border-indigo-400',
      text: 'text-indigo-300',
      bg: 'bg-indigo-900/30'
    }
  },
  {
    id: 'linux-manager',
    title: 'GNU/Linux Manager',
    institution: 'Professional Certification',
    type: 'certification',
    period: '2024',
    status: 'completed',
    description: 'Advanced Linux system administration and management certification.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linux.svg',
    color: {
      border: 'border-emerald-400',
      text: 'text-emerald-300',
      bg: 'bg-emerald-900/30'
    }
  },
  {
    id: 'it-school',
    title: 'IT Orientation School',
    institution: 'Escuela de Comercio Martin Zapata',
    type: 'school',
    period: '2017 - 2021',
    status: 'completed',
    description: 'Secondary education with specialization in Information Technology and computer systems.',
    color: {
      border: 'border-green-400',
      text: 'text-green-300',
      bg: 'bg-green-900/30'
    }
  },
  {
    id: 'english-b2',
    title: 'B2 English Certification',
    institution: 'Colegio de Lenguas Extranjeras',
    type: 'certification',
    period: '2016 - 2020',
    status: 'completed',
    description: 'Upper intermediate level English certification with focus on technical and professional communication.',
    color: {
      border: 'border-blue-400',
      text: 'text-blue-300',
      bg: 'bg-blue-900/30'
    }
  }
];