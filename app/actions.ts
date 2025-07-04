"use server";

import { prisma } from "@/prisma";
import { calculateProfit } from "@/utility/calculate-profit";
import { generateAffiliateCode } from "@/utility/generateAffiliateCode";
import { revalidatePath } from "next/cache";

export const createNewPrivateSale = async ({
    walletAddress,
    solanaValue,
    tokenValue,
    txHash,
    affiliateCode,
}: {
    walletAddress: string;
    solanaValue: string;
    tokenValue: string;
    txHash: string;
    affiliateCode?: string;
}) => {
    if (!walletAddress) {
        throw new Error("Wallet address is required");
    }

    if (solanaValue == "0" || solanaValue == "0") {
        throw new Error("Solana value is required");
    }

    const res = await prisma.privateSale.create({
        data: {
            walletAddress,
            solanaValue,
            tokenValue,
            txHash,
            AffiliateUser: affiliateCode && affiliateCode !== "" ? {
                connect: {
                    affiliateCode: affiliateCode || "",
                }
            }
                : undefined,
            affiliateUserProfit: affiliateCode ? calculateProfit(solanaValue) : undefined,
        },
    });

    revalidatePath("/app/page.tsx", "page");

    return res;
};

export const getBalanceByWalletAddress = async (walletAddress: string) => {
    return await prisma.privateSale.findMany({
        where: {
            walletAddress,
        },
    });
};

// affiliate User

export const getAffiliateUser = async (walletAddress: string) => {
    try {
        const affiliateUser = prisma.affiliateUser.findUnique({
            where: {
                walletAddress: walletAddress,
            },
        });
        return affiliateUser;
    } catch (error) {
        console.log(error);
    }
};

export const findAffiliateUserByCode = async (affiliateCOde: string) => {
    try {
        const affiliateUser = prisma.affiliateUser.findUnique({
            where: {
                affiliateCode: affiliateCOde,
            },
        });
        return affiliateUser;
    } catch (error) {
        console.log(error);
    }
};

export const getAffiliateUserDetails = async (
    walletAddress: string,
    affiliateCode: string,
) => {
    try {
        const affiliateUserExists = await prisma.affiliateUser.findUnique({
            where: {
                walletAddress: walletAddress,
                affiliateCode: affiliateCode,
            },
        });
        if (!affiliateUserExists) return;
        const affiliateDetails = await prisma.privateSale.findMany({
            where: {
                affiliateCode: affiliateUserExists.affiliateCode,
            },
            select: {
                affiliateUserProfit: true,
            },
        });
        return affiliateDetails;
    } catch (error) {
        console.log(error);
    }
};

export const createAffiliateUser = async (walletAddress: string) => {
    try {
        const affiliateUserCreated = prisma.affiliateUser.create({
            data: {
                walletAddress: walletAddress,
                affiliateCode: generateAffiliateCode(walletAddress),
            },
        });
        return affiliateUserCreated;
    } catch (error) {
        console.log(error);
    }
};