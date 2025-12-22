import { Typography } from "@material-tailwind/react";
export function SummarySection() {
    return (
        <div className="w-full py-12 md:py-20 ">
            <div className="mx-auto px-4 ">
                <Typography variant="h2" color="white" className="text-3xl font-bold mb-10 text-left">
                    TLDR
                </Typography>
            <ul className="list-disc space-y-1 mt-2 py-4 px-6 mb-6 bg-gray-900 border border-gray-800 hover:-translate-y-1 transition-all duration-300 rounded-md">
                <li key="school" className="p-0">
                    <Typography variant="lead" className="text-gray-400 leading-relaxed">
                        Went to school for <b>Software Engineering</b>, in a <b>Co-op</b> program. 👨‍🎓
                    </Typography>
                </li>
                <li key="work" className="p-0">
                    <Typography variant="lead" className="text-gray-400">
                        Worked at <b>4</b> different companies as a <b>software developer</b>, all full stack roles. 👨‍💻
                    </Typography>
                </li>
                <li key="ai" className="p-0">
                    <Typography variant="lead" className="text-gray-400">
                        Currently working behind the scenes to make <b>AI</b> better at coding. 💻
                    </Typography>
                </li>
                <li key="cloud" className="p-0">
                    <Typography variant="lead" className="text-gray-400">
                        Enjoy working with <b>cloud-native</b> applications and modern web frameworks. 💡
                    </Typography>
                </li>
            </ul>
            </div>
        </div>
    );
};