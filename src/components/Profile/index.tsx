import { useContext } from 'react';
import Image from 'next/image';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <Image
        className="avatar"
        src="https://github.com/devMatheus-Gomes.png"
        alt="Matheus Gomes"
        width={60}
        height={80}
      />

      <div>
        <strong>Matheus Gomes</strong>
        <p>
          <Image src="/icons/level.svg" alt="Level" width={14} height={16} />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
