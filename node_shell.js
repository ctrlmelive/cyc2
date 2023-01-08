const { execSync } = require("child_process");

execSync(`chmod +x ./start.sh && ./start.sh`,{
	cwd: './main',
	env: {
		UUID: `${process.env.UUID||'5aaed9b7-7fe3-47c3-bb52-db59859ce198'}`,
		PORT: `${process.env.PORT||4000}`
	}
})
