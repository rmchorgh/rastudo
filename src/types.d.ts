interface Program {
	time?: [Date, Date] | undefined | null;
	name: string;
	location: string;
	description: string;
	videoLink?: string | undefined | null;
}

interface Channel {
	name: string;
	programs: Program[];
}

export { Program, Channel };
