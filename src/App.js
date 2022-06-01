import React, { useState, useEffect } from "react";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import GlobalStyle from "carbon-react/lib/style/global-style";
import Box from "carbon-react/lib/components/box";
import { Tabs, Tab } from "carbon-react/lib/components/tabs";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Drawer from "carbon-react/lib/components/drawer";

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname.replace("/", ""));
  }, [location]);

  const navigate = useNavigate();

  return (
    <CarbonProvider>
      <GlobalStyle />
      <Box margin="0 25px">
        {activeTab}
        <Drawer
          expandedWidth="300px"
          height="calc(100vh - 82px)"
          sidebar={
            <Tabs
              selectedTabId={activeTab}
              onTabChange={(tabIndex) => {
                setActiveTab(tabIndex);
                navigate("/" + tabIndex);
              }}
            >
              <Tab
                tabId="tab1"
                title="Tab 1"
                key="tab-1"
                customLayout={
                  <Box px={5} py={2}>
                    Content for tab 1
                  </Box>
                }
              />
              <Tab
                tabId="tab2"
                title="Tab 2"
                key="tab-2"
                customLayout={
                  <Box px={5} py={2}>
                    Content for tab 2
                  </Box>
                }
              />
              <Tab
                tabId="tab3"
                title="Tab 3"
                key="tab-3"
                customLayout={
                  <Box px={5} py={2}>
                    Content for tab 3
                  </Box>
                }
              />
              <Tab
                tabId="tab4"
                title="Tab 4"
                key="tab-4"
                customLayout={
                  <Box px={5} py={2}>
                    Content for tab 4
                  </Box>
                }
              />

              <Tab
                tabId="tab5"
                title="Tab 5"
                key="tab-5"
                customLayout={
                  <Box px={5} py={2}>
                    Content for tab 5
                  </Box>
                }
              />
            </Tabs>
          }
        >
          Content
        </Drawer>
      </Box>
    </CarbonProvider>
  );
};
export default MyTabs;
