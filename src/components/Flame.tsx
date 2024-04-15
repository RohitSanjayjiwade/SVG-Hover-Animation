import { RefObject, useEffect, useState } from "react";

interface Props {
	cursor: { x: number; y: number }
	cardRef: RefObject<HTMLElement>
	mouseOnCard: boolean
}


const Flame = ({ cursor, cardRef, mouseOnCard }: Props) => {

	const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })

	useEffect(() => {
		if (cardRef.current && cursor.x !== null && cursor.y !== null) {
			const cardRect = cardRef.current.getBoundingClientRect()
			const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
			const cyPercentage = (cursor.y / cardRect.height) * 100
			setGradientCenter({
				cx: `${cxPercentage}%`,
				cy: `${cyPercentage}%`,
			})
		}
	}, [cursor, cardRef])

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				className="w-96 h-96 duration-200 transition-all"
			>
				<defs>
					<radialGradient
						id="emeraldGradient"
						gradientUnits="userSpaceOnUse"
						r="35%"
						cx={gradientCenter.cx}
						cy={gradientCenter.cy}
					>
						{mouseOnCard && <stop stopColor="#10b981" />}
						<stop offset={1} stopColor="#404040" />
					</radialGradient>
				</defs>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					className="fill-neutral-950/50"
					stroke="url(#emeraldGradient)"
					d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					className="fill-neutral-800/50"
					stroke="url(#emeraldGradient)"
					d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-96 h-96 duration-200 transition-all">
					<defs>
						<radialGradient
							id="emeraldGradient"
							gradientUnits="userSpaceOnUse"
							r="35%"
							cx={gradientCenter.cx}
							cy={gradientCenter.cy}
						>
							{mouseOnCard && <stop stopColor="#10b981" />}
							<stop offset={1} stopColor="#404040" />
						</radialGradient>
					</defs>
					<path className="fill-neutral-950/50" stroke="url(#emeraldGradient)" strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
			</svg>
		</>

	)
}


export default Flame;