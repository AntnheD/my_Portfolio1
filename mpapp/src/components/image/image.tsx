import Image from 'next/image';

export default function MyComponent() {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="My profile picture"
        width={200}
        height={200}
        layout="responsive" // Make the image responsive
        placeholder="blur"   // Show a blurred placeholder
      />
    </div>
  );
}