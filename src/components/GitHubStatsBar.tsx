// components/GitHubStatsBar.tsx
import { useEffect, useState } from "react";

type GitHubStatsBarProps = {
    username: string;
    token: string;
};

export const GitHubStatsBar = ({ username, token }: GitHubStatsBarProps) => {
    const [repoCount, setRepoCount] = useState<number | null>(null);
    const [commitCount, setCommitCount] = useState<number | null>(null);

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        const currentYear = new Date().getFullYear();
        const startDate = `${currentYear}-01-01T00:00:00Z`;
        const endDate = new Date().toISOString();

        fetch("https://api.github.com/graphql", {
            method: "POST",
            headers,
            body: JSON.stringify({
                query: `
                    query {
                        user(login: "${username}") {
                            contributionsCollection(from: "${startDate}", to: "${endDate}") {
                                contributionCalendar {
                                    totalContributions
                                }
                            }
                            repositories(privacy: PUBLIC, first: 100) {
                                totalCount
                            }
                        }
                    }
                    `,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                const userData = data?.data?.user;

                const commitCount = userData?.contributionsCollection?.contributionCalendar?.totalContributions ?? null
                const publicRepos = userData?.repositories?.totalCount ?? 0;

                setCommitCount(commitCount);
                setRepoCount(publicRepos);
            })
            .catch(() => {
                setCommitCount(null);
                setRepoCount(null);
            });
    }, [username, token]);

    return (
        <div className="w-full max-w-screen-lg bg-neutral-800 border border-stone-700 rounded-2xl shadow-lg px-6 py-4 flex flex-row justify-between items-center gap-6">
            <Stat title="Years of Experience" value="1+" />
            <Stat title="GitHub Repos" value={repoCount !== null ? `${repoCount}+` : "..."} />
            <Stat title="Contributions YTD" value={commitCount !== null ? `${commitCount}+` : "..."} />
            <Stat title="LeetCode Solved" value="93+" />
        </div>
    );
};

const Stat = ({ title, value }: { title: string; value: string }) => (
    <div className="text-center">
        <p className="text-2xl font-bold text-orange-400">{value}</p>
        <p className="text-stone-400 text-sm">{title}</p>
    </div>
);