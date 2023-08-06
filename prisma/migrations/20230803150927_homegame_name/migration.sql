/*
  Warnings:

  - Added the required column `name` to the `Homegames` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Homegames" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Homegames_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Homegames" ("createdAt", "id", "ownerId", "updatedAt") SELECT "createdAt", "id", "ownerId", "updatedAt" FROM "Homegames";
DROP TABLE "Homegames";
ALTER TABLE "new_Homegames" RENAME TO "Homegames";
CREATE UNIQUE INDEX "Homegames_ownerId_key" ON "Homegames"("ownerId");
CREATE UNIQUE INDEX "Homegames_name_key" ON "Homegames"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
