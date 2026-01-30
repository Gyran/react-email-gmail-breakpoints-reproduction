import { Body, Head, Html } from "@react-email/components";
import { pixelBasedPreset, Tailwind } from "@react-email/tailwind";

function TestEmail() {
	return (
		<Html>
			<Tailwind
				config={{
					presets: [pixelBasedPreset],
					theme: { screens: { sm: "480px" } },
				}}
			>
				<Head />
				<Body>
					<div>0.5.7 px</div>
					<div className="block sm:hidden">Mobile</div>
					<div className="hidden sm:block">Desktop</div>
					<div className="w-[100px] h-[100px] bg-red-500 sm:bg-blue-500" />
				</Body>
			</Tailwind>
		</Html>
	);
}

export default TestEmail;
