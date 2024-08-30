import { api_url } from "../app/(home)/page";
import { Card, Skeleton } from "@nextui-org/react";

const getVideo = async (id: string) => {
    const response = await fetch(`${api_url}/${id}/videos`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideo(id);
    // return <h6>{JSON.stringify(videos)}</h6>;
    return (
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg bg-gray-400">
                <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg bg-slate-500">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg bg-slate-500">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg bg-slate-500">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
            <h6>{JSON.stringify(videos)}</h6>
        </Card>
    );
}
