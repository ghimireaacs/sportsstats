import {
    NavigationMenu,
    // NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger
    // NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  interface Navprops {
     
  }

  const Navmenu: React.FC<Navprops> = () => {
    return(
    <> 
    <nav className="flex justify-center #bg-gray-500 p-4 my-4 mx-64 rounded-lg border-2 uppercase bg-white" >
      <NavigationMenu>
      <NavigationMenuList className="flex justify-around w-full gap-24">
        <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/teams">Teams</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/leagues">Leagues</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator asChild />
      </NavigationMenuList>
      
    </NavigationMenu>
    </nav>
    </>
    );
  };

  export default Navmenu