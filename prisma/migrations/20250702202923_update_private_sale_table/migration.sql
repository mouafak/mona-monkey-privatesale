/*
  Warnings:

  - The primary key for the `affiliateuser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `affiliateUserWalletAddress` on the `privatesale` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `privatesale` DROP FOREIGN KEY `PrivateSale_affiliateUserWalletAddress_fkey`;

-- DropIndex
DROP INDEX `PrivateSale_affiliateUserWalletAddress_fkey` ON `privatesale`;

-- AlterTable
ALTER TABLE `affiliateuser` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`affiliateCode`);

-- AlterTable
ALTER TABLE `privatesale` DROP COLUMN `affiliateUserWalletAddress`,
    ADD COLUMN `affiliateCode` VARCHAR(191) NULL,
    ADD COLUMN `affiliatePercent` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `PrivateSale` ADD CONSTRAINT `PrivateSale_affiliateCode_fkey` FOREIGN KEY (`affiliateCode`) REFERENCES `AffiliateUser`(`affiliateCode`) ON DELETE SET NULL ON UPDATE CASCADE;
