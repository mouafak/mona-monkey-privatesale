-- AlterTable
ALTER TABLE `privatesale` ADD COLUMN `affiliateUserWalletAddress` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `AffiliateUser` (
    `walletAddress` VARCHAR(191) NOT NULL,
    `affiliateCode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AffiliateUser_walletAddress_key`(`walletAddress`),
    UNIQUE INDEX `AffiliateUser_affiliateCode_key`(`affiliateCode`),
    PRIMARY KEY (`walletAddress`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PrivateSale` ADD CONSTRAINT `PrivateSale_affiliateUserWalletAddress_fkey` FOREIGN KEY (`affiliateUserWalletAddress`) REFERENCES `AffiliateUser`(`walletAddress`) ON DELETE SET NULL ON UPDATE CASCADE;
