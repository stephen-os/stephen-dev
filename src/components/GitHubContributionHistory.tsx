import React, { useEffect, useState } from 'react';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface GitHubContributionGridProps {
    username: string;
    token: string;
}

export const GitHubContributionHistory: React.FC<GitHubContributionGridProps> = ({ username, token }) => {
    const [contributions, setContributions] = useState<ContributionDay[][]>([]);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchContributions = async () => {
            const from = `${new Date().getFullYear()}-01-01T00:00:00Z`;

            const query = `
                query {
                user(login: "${username}") {
                    contributionsCollection(from: "${from}") {
                    contributionCalendar {
                        weeks {
                        contributionDays {
                            date
                            contributionCount
                        }
                        }
                    }
                    }
                }
                }
            `;

            try {
                const res = await fetch(GITHUB_GRAPHQL_API, {
                    method: 'POST',
                    headers: {
                        Authorization: `bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query }),
                });

                const json = await res.json();

                if (json.errors) {
                    setError(JSON.stringify(json.errors));
                    return;
                }

                const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
                const formattedWeeks = weeks.map((week: any) => week.contributionDays);

                setContributions(formattedWeeks);
            } catch (err) {
                setError('Failed to fetch contributions.');
            }
        };

        fetchContributions();
    }, [username, token]);

    if (error) return <p className="text-red-600 font-mono">{error}</p>;

    return (
        <div className="w-full max-w-screen-lg justify-center bg-neutral-800 border border-stone-700 rounded-2xl shadow-lg px-6 py-4 flex flex-row justify-between items-center gap-6">
            <div className="flex gap-[2px] overflow-x-auto">
                {contributions.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-[2px]">
                        {week.map((day: ContributionDay, dayIdx: number) => (
                            <div
                                key={dayIdx}
                                className="w-3 h-3 rounded"
                                title={`${day.date}: ${day.contributionCount} contributions`}
                                style={{ backgroundColor: getColor(day.contributionCount) }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Tailwind-compatible orange scale
function getColor(count: number): string {
    if (count === 0) return '#ebedf0';       // gray
    if (count < 2) return '#ffedd5';         // lightest orange
    if (count < 5) return '#fdba74';         // medium-light orange
    if (count < 10) return '#fb923c';        // medium orange
    return '#ea580c';                        // dark orange
}