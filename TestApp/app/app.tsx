import React, { useState, useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import { RootNavigator } from "./navigators/root-navigator"
import { AppStack } from "./navigators/app-navigator"

function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
      setupRootStore().then(setRootStore)
    })()
  }, [])

  if (!rootStore) {return null }

  return (
      <RootStoreProvider value={rootStore}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ToggleStorybook>
          {/* <RootNavigator /> */}
          <AppStack />
          </ToggleStorybook>
        </SafeAreaProvider>
      </RootStoreProvider>
   
  )
}

export default App
