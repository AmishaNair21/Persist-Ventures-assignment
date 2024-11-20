
'use client';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';  // Import your Redux store
import { SidebarProvider } from '../../components/ui/sidebar';  // Import any other providers
import { AppSidebar } from '../../components/app-sidebar';  // Import Sidebar component
import { SidebarTrigger } from '../../components/ui/sidebar';  // Sidebar toggle component

// Wrapper Provider Component
const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}> {/* Redux Store */}
      <SidebarProvider> {/* Sidebar Provider */}
        <AppSidebar/>
        <SidebarTrigger />
        <main className='flex flex-col items-center mt-6'>
      
          {children} {/* All your main content */}
        </main>
      </SidebarProvider>
    </Provider>
  );
};

export default AllProviders;
