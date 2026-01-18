-- CreateTable
CREATE TABLE `PrivateSale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `walletAddress` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL DEFAULT '10M',
    `solanaValue` VARCHAR(191) NOT NULL,
    `tokenValue` VARCHAR(191) NOT NULL,
    `txHash` MEDIUMTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `affiliateCode` VARCHAR(191) NULL,
    `affiliateUserProfit` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AffiliateUser` (
    `affiliateCode` VARCHAR(191) NOT NULL,
    `walletAddress` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AffiliateUser_affiliateCode_key`(`affiliateCode`),
    UNIQUE INDEX `AffiliateUser_walletAddress_key`(`walletAddress`),
    PRIMARY KEY (`affiliateCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PrivateSale` ADD CONSTRAINT `PrivateSale_affiliateCode_fkey` FOREIGN KEY (`affiliateCode`) REFERENCES `AffiliateUser`(`affiliateCode`) ON DELETE SET NULL ON UPDATE CASCADE;
