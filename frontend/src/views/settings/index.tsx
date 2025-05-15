import { Header } from "@/components/layout/header";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Main } from "@/components/layout/main";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitch } from "@/components/language-switch"
import { Search } from "@/components/search";



export default function Settings() {


    return (
        <>
            <Header fixed>
                <Search />
                <div className="ml-auto flex items-center space-x-4">
                    <LanguageSwitch />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>


            <Main fixed>

                ddddd
            </Main>
        </>
    )
}