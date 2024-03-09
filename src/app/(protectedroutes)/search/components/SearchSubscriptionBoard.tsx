import { FC } from 'react';
import { SubscriptionSquare } from '@/components/SubscriptionSquare';
import { SubscriptionBaseType } from '@/types/SubscriptionBaseType';
import { BoardWrapper } from '@/components/BoardWrapper';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
  listOfSubscriptions: SubscriptionBaseType[];
};

export const SearchSubscriptionBoard: FC<Props> = ({
  listOfSubscriptions,
}) => {
  return (
    <BoardWrapper>
      <ScrollArea>
        <div className="grid grid-cols-3 gap-1">
          {listOfSubscriptions.map(
            (subscriptionItem, index) => {
              return (
                <Drawer
                  key={subscriptionItem.subscriptionId}
                >
                  <DrawerTrigger asChild>
                    <SubscriptionSquare
                      label={
                        subscriptionItem.subscriptionName
                      }
                      color="#FFFFFF"
                      iconUrl={subscriptionItem.icon}
                      index={index}
                    />
                  </DrawerTrigger>
                  <DrawerContent>
                    <p className="mx-5 pb-2">
                      新しいサブスクリプションを追加
                    </p>
                    <div className="border-b flex gap-2 mx-5 pb-2">
                      <Image
                        src={subscriptionItem.icon}
                        alt={'サブスクアイコン'}
                        width={24}
                        height={24}
                      />
                      <p>
                        {subscriptionItem.subscriptionName}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-5">
                      <DrawerClose className="w-full flex justify-center gap-4">
                        <Button
                          variant="outline"
                          className="w-[30%]"
                        >
                          キャンセル
                        </Button>
                        <Button
                          onClick={() => {}}
                          className="w-[30%]"
                        >
                          追加する
                        </Button>
                      </DrawerClose>
                    </div>
                  </DrawerContent>
                </Drawer>
              );
            }
          )}
        </div>
      </ScrollArea>
    </BoardWrapper>
  );
};