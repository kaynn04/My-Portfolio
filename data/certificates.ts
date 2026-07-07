export type Certificate = {
  title: string;
  issuer: string;
  imageUrl?: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Outside the Box Certificate",
    issuer: "PacketHacks",
    imageUrl: "/certificates/OutsideTheBox_Certificate.jpg",
    credentialUrl: "/certificates/OutsideTheBox_Certificate.jpg",
  },
  {
    title: "Zuitt Certificate",
    issuer: "Zuitt",
    imageUrl: "/certificates/Zuitt.png",
    credentialUrl: "/certificates/Zuitt.png",
  },
  {
    title: "Basic Cisco Certificate",
    issuer: "Cisco",
    imageUrl: "/certificates/BasicCiscoCertificatejpg.jpg",
    credentialUrl: "/certificates/BasicCiscoCertificatejpg.jpg",
  },
  {
    title: "REST API Certificate",
    issuer: "LinkedIn",
    imageUrl: "/certificates/RestAPI.jpg",
    credentialUrl: "/certificates/RestAPI.jpg",
  },
];
