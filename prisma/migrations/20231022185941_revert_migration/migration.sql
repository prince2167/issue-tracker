/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `issue` table. All the data in the column will be lost.
  - Added the required column `updaredAt` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `issue` DROP COLUMN `updatedAt`,
    ADD COLUMN `updaredAt` DATETIME(3) NOT NULL;
