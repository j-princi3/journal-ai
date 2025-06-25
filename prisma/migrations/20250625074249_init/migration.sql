-- CreateTable
CREATE TABLE "Entry" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);
