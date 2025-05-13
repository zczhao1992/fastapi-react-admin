import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import { IconCheck } from "@tabler/icons-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="scale-95 rounded-full">
                    <Languages className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Languages className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Languages</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("zh")}>
                    简体中文{" "}
                    <IconCheck
                        size={14}
                        className={cn("ml-auto", language !== "zh" && "hidden")}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                    English{" "}
                    <IconCheck
                        size={14}
                        className={cn("ml-auto", language !== "en" && "hidden")}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}