import crypto from "crypto";
export const generateAffiliateCode = (walletAddress: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(walletAddress);
  const hashCode = hash.digest("hex");

  // Generate a random starting index within the hash
  const randomIndex = Math.floor(Math.random() * (hashCode.length - 8));

  // Take 8 characters from the randomly selected index
  return hashCode.substring(randomIndex, randomIndex + 8);
};
