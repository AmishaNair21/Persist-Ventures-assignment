import { LayoutDashboard,FileCheck,  } from "lucide-react"
import { FaUserCog , FaChartBar} from "react-icons/fa"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

  
import Image from "next/image"


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "User Management",
    url: "/user-management",
    icon: FaUserCog,
  },
  {
    title: "Content Moderation",
    url: "/content-moderation",
    icon: FileCheck,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: FaChartBar,
  },
 
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader><Image src="/logo.png" alt="logo" width={50} height={50} className=" " /></SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton className=" hover:bg-gradient-to-r from-purple-500  to-red-500 my-1 2xl:my-2  2xl:text-2xl 2xl:h-14"  asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span >{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
         
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex-row items-center gap-2"> <div className="relative  w-6 h-6 rounded-full overflow-hidden border-1 border-gray-200">
              <Image
                src="/logo.png"
                alt="User avatar"
                fill
                className="object-cover"
                sizes="32px"
                priority
              />
              
            </div>
            <p className="text-sm">admin@gmail.com</p>  
</SidebarFooter>
    </Sidebar>
  )
}
