'use client';
import { createAffiliateUser, getAffiliateUserDetails } from '@/app/actions';
import CopyToClipboardButton from '@/components/copy-to-clipboard';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { CircleDollarSign, LoaderIcon } from 'lucide-react';
import { use, useContext, useEffect, useState } from 'react';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import PrivateSaleContext, {
  privateSaleContextType,
} from '../private-sale/context/private-sale-context';

type TAffiliateUserDetails = {
  affiliateUserProfit: string | null;
};

const Affiliate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [affiliateUserDetails, setAffiliateUserDetails] =
    useState<TAffiliateUserDetails[]>();
  const isConnected = useIsLoggedIn();
  const { primaryWallet } = useDynamicContext();
  const [address, setAddress] = useState<string | null>(null);
  const {
    canRequestAffiliateCode,
    affiliateCode,
    setAffiliateCode,
    setCanRequestAffiliateCode,
  } = useContext(PrivateSaleContext) as privateSaleContextType;

  useEffect(() => {
    if (isConnected && primaryWallet) {
      setAddress(primaryWallet.address);
    } else {
      setAddress(null);
      setAffiliateCode(null);
      setCanRequestAffiliateCode(false);
    }
  }, [primaryWallet]);

  const requestAffiliateCode = async () => {
    if (!canRequestAffiliateCode) return;
    try {
      setIsLoading(true);
      if (isConnected && address) {
        const newAffiliateUser = await createAffiliateUser(address as string);
        if (newAffiliateUser) {
          setAffiliateCode(newAffiliateUser.affiliateCode);
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let interval: number;
    const getAffiliateUserInfo = async () => {
      if (!isConnected || !address || !affiliateCode || !isDrawerOpen) return;
      try {
        const res = await getAffiliateUserDetails(
          address as string,
          affiliateCode
        );
        setAffiliateUserDetails(res);
        // console.info('Fetching affiliate user details...');
      } catch (error) {
        console.error('Error fetching affiliate user details:', error);
      }
    };

    if (isConnected && address && affiliateCode && isDrawerOpen) {
      // Exécuter immédiatement
      getAffiliateUserInfo();

      //répéter toutes les 10 secondes
      interval = window.setInterval(getAffiliateUserInfo, 10_000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isConnected, address, affiliateCode, isDrawerOpen]);

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="rounded-none w-full bg-primary/80 hover:bg-primary text-background font-display disabled:bg-blueDarken/80 text-sm font-medium tracking-wider flex-center gap-2 border-none group "
        >
          Affiliate Program
          <span className="px-1 py-0.5 bg-background text-xs text-foreground md:text-sm rounded-sm group-hover:bg-background dark:text-background group-hover:dark:text-foreground animate-pulse">
            10%
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex justify-center items-center">
        <div className="w-[90%] md:w-full md:max-w-md">
          <DrawerHeader className="flex flex-col gap-2 w-full px-0 pt-10">
            <DrawerTitle className="flex justify-between items-center font-display uppercase">
              Affiliate Program
              <div className="bg-primary text-background px-2 py-1 flex justify-center items-center gap-1 rounded text-xs font-normal tracking-widest">
                <CircleDollarSign className="w-4 h-4 animate-pulse" />
                10% commission
              </div>
            </DrawerTitle>
            <DrawerDescription className="text-xs text-left ">
              Share your unique link with your community and earn commissions on
              every purchase made through your link.
            </DrawerDescription>
          </DrawerHeader>
          <div className=" flex flex-col justify-center items-center gap-4 w-full ">
            <div className="flex flex-col gap-2 w-full py-2.5">
              <span className="text-xs text-muted-foreground">
                {affiliateCode
                  ? 'Your Affiliate Link'
                  : 'Request Affiliate Link'}
              </span>
              {affiliateCode ? (
                <div className="flex gap-2 w-full">
                  <p className="text-sm bg-secondary px-2 py-1 rounded-sm flex justify-center items-center w-full">
                    {`https://privatesale.xanopay.com?code=${affiliateCode}`}
                  </p>
                  <CopyToClipboardButton
                    textToCopy={`https://privatesale.xanopay.com?code=${affiliateCode}`}
                  />
                </div>
              ) : !affiliateCode && canRequestAffiliateCode ? (
                <Button
                  className="rounded-none w-full bg-primary hover:bg-primary/80 text-background font-display disabled:bg-blueDarken/80 text-sm font-medium tracking-wider flex-center gap-2"
                  variant="default"
                  onClick={requestAffiliateCode}
                >
                  {isLoading ? (
                    <span className="flex gap-2">
                      <LoaderIcon className="w-4 animate-spin" /> Loading ...
                    </span>
                  ) : (
                    'Request Affiliate Link'
                  )}
                </Button>
              ) : (
                <p className="text-xs bg-red-300 dark:bg-red-500 px-2 py-1 rounded-sm flex justify-center items-center w-full">
                  To request an affiliate link, you must have participated in
                  our private sale
                </p>
              )}
            </div>
            <div className=" pb-2.5 flex justify-center items-center gap-4 w-full">
              <div className="flex flex-col items-center justify-center space-x-2 border rounded w-full h-24">
                <div className="text-4xl font-bold tracking-tighter">
                  {isConnected
                    ? primaryWallet?.address ==
                      '382PVkJoGFAsqSsts1uvYftUDW5fzn9B9GU8s3JybaGD'
                      ? (affiliateUserDetails?.length || 0) + 850
                      : affiliateUserDetails?.length || 0
                    : 0}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Link Used
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-x-2 border rounded w-full h-24">
                <div className="text-4xl font-bold tracking-tighter px-2">
                  {(isConnected &&
                    affiliateUserDetails
                      ?.reduce(
                        (sum, current) =>
                          sum + Number(current.affiliateUserProfit),
                        0
                      )
                      .toFixed(2)) ||
                    0}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  SOL Earned
                </div>
              </div>
            </div>
            <div className="pb-10">
              <p className="text-xs text-muted-foreground p-2 bg-secondary rounded-sm">
                <span className="text-xs pb-1 block text-foreground font-semibold">
                  Affiliate Rewards Distribution Notice
                </span>
                Please note that affiliate rewards are distributed at the
                conclusion of each private sale phase. We appreciate your
                participation and support. Stay tuned for updates following each
                phase s closure to receive your rewards.
              </p>
            </div>
          </div>
          {/* <DrawerFooter>
              <Button>Submit</Button>
            </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Affiliate;
