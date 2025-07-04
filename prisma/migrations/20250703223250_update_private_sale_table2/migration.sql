/*
  Warnings:

  - You are about to drop the column `affiliatePercent` on the `privatesale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `privatesale` DROP COLUMN `affiliatePercent`,
    ADD COLUMN `affiliateUserProfit` VARCHAR(191) NULL;
