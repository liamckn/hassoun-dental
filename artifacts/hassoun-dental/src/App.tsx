import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Switch, Route } from "wouter";
import HomePage from "@/pages/HomePage";
import ImplantPage from "@/pages/ImplantPage";
import ParodontitePage from "@/pages/ParodontitePage";
import UrgencePage from "@/pages/UrgencePage";
import DentisteEnfantPage from "@/pages/DentisteEnfantPage";
import GencivesPage from "@/pages/GencivesPage";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/implant-dentaire-marseille" component={ImplantPage} />
            <Route path="/parodontite-marseille" component={ParodontitePage} />
            <Route path="/urgence-dentaire-marseille" component={UrgencePage} />
            <Route path="/dentiste-enfant-marseille" component={DentisteEnfantPage} />
            <Route path="/gencives-qui-saignent-marseille" component={GencivesPage} />
          </Switch>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
