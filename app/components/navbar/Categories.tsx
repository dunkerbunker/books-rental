'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { 
  FaBook, 
  FaBookOpen, 
  FaBookDead, 
  FaRegFrown, 
  FaRegSmile, 
  FaRegLaughBeam, 
  FaRegSadTear,
  FaRocket,
  FaSearch,
  FaHeartbeat,
  FaHatWizard,
  FaLandmark,
  FaPen,
  FaJournalWhills
} from 'react-icons/fa';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Fiction',
    icon: FaBookOpen,
    description: 'This book falls under Fiction!',
  },
  {
    label: 'Non-Fiction',
    icon: FaBook,
    description: 'This book falls under Non-Fiction!',
  },
  {
    label: 'Horror',
    icon: FaBookDead,
    description: 'This book is a Horror novel!'
  },
  {
    label: 'Romance',
    icon: FaRegSmile,
    description: 'This book is a Romance novel!'
  },
  {
    label: 'Comedy',
    icon: FaRegLaughBeam,
    description: 'This book is a Comedy!'
  },
  {
    label: 'Drama',
    icon: FaRegFrown,
    description: 'This book is a Drama!'
  },
  {
    label: 'Tragedy',
    icon: FaRegSadTear,
    description: 'This book is a Tragedy!'
  },
  {
    label: 'Science Fiction',
    icon: FaRocket,
    description: 'This book falls under Science Fiction!'
  },
  {
    label: 'Mystery',
    icon: FaSearch,
    description: 'This book is a Mystery novel!'
  },
  {
    label: 'Thriller',
    icon: FaHeartbeat,
    description: 'This book is a Thriller!'
  },
  {
    label: 'Fantasy',
    icon: FaHatWizard,
    description: 'This book is a Fantasy novel!'
  },
  {
    label: 'Historical',
    icon: FaLandmark,
    description: 'This book is a Historical novel!'
  },
  {
    label: 'Biography',
    icon: FaPen,
    description: 'This book is a Biography!'
  },
  {
    label: 'Poetry',
    icon: FaJournalWhills,
    description: 'This book is a collection of Poetry!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;