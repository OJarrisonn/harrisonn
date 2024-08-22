import React from "react";

export default function FormattedDate({ date }: { date: Date }) {
	return (
		<time dateTime={date.toISOString()}>
			{date.toLocaleDateString("pt-br", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})}
		</time>
	);
}
