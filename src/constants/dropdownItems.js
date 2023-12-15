export const eventFilters = [
    {
        value: "",
        label: "Sessions"
    },
    {
        value: "SessionToForeground",
        label: "app was brought to foreground"
    },
    {
        value: "SessionToBackground",
        label: "app was sent to background"
    },
    {
        value: "SessionTestOff",
        label: "app was set to A/B test off"
    },
    {
        value: "SessionTestOn",
        label: "app was set to A/B test on"
    },
    {
        value: "",
        label: "A/B Tests"
    },
    {
        value: "ABTest1_Group10",
        label: "test 1 user A/B weight between [0.0, 0.1)"
    },
    {
        value: "ABTest1_Group20",
        label: "test 1 user A/B weight between [0.1, 0.2)"
    },
    {
        value: "ABTest1_Group30",
        label: "test 1 user A/B weight between [0.2, 0.3)"
    },
    {
        value: "ABTest1_Group40",
        label: "test 1 user A/B weight between [0.3, 0.4)"
    },
    {
        value: "ABTest1_GroupControl",
        label: "test 1 user A/B weight in control group between [0.4, 1.0]"
    },
    {
        value: "ABTest1_Tick_Group10",
        label: "test 1 user A/B tick event group between [0.0, 0.1)"
    },
    {
        value: "ABTest1_Tick_Group20",
        label: "test 1 user A/B tick event group between [0.1, 0.2)"
    },
    {
        value: "ABTest1_SliderMsg_Group30",
        label: "test 1 user A/B slider drag group between [0.2, 0.3)"
    },
    {
        value: "ABTest1_SliderMsg_Group40",
        label: "test 1 user A/B slider drag group between [0.3, 0.4)"
    },
    {
        value: "ABTest1_SnapToIndex_Group30",
        label: "test 1 user A/B slider snap group between [0.2, 0.3)"
    },
    {
        value: "ABTest1_SnapToIndex_Group40",
        label: "test 1 user A/B slider snap group between [0.3, 0.4)"
    },
    {
        value: "ABTest2_Group40",
        label: "test 2 user A/B weight between [0.0, 0.4)"
    },
    {
        value: "ABTest2_GroupControl",
        label: "test 2 user A/B weight in control group between [0.4, 1.0]"
    },
    {
        value: "ABTest2_Tick_Group40",
        label: "test 2 user A/B tick event group between [0.0, 0.4)"
    },
    {
        value: "ABTest2_SliderMsg_Group40",
        label: "test 2 user A/B slider drag group between [0.0, 0.4)"
    },
    {
        value: "ABTest2_SnapToIndex_Group40",
        label: "test 1 user A/B slider snap group between [0.0, 0.4)"
    },
    {
        value: "ABTest3_GroupControl",
        label: "test 3 user A/B weight in control group between [0.0, 1.0]"
    },
    {
        value: "",
        label: "First Run Flow"
    },
    {
        value: "FirstRunStartView",
        label: "view of start screen"
    },
    {
        value: "FirstRunDestinationView",
        label: "view of destination selection"
    },
    {
        value: "FirstRunTransitModeView",
        label: "view of transit mode"
    },
    {
        value: "FirstRunUnitsView",
        label: "view of units screen"
    },
    {
        value: "FirstRunStartNextClick",
        label: "click 'Next' on start screen"
    },
    {
        value: "FirstRunUserEnteredText",
        label: "user typed input"
    },
    {
        value: "FirstRunStartSuggestionSelectionClick",
        label: "click start screen autosuggestion"
    },
    {
        value: "FirstRunStartCurrentLocationClick",
        label: "click 'Current location' on start screen"
    },
    {
        value: "FirstRunDestinationNextClick",
        label: "click 'Next' on destination screen"
    },
    {
        value: "FirstRunDestinationSuggestionSelectionClick",
        label: "click destination screen autosuggestion"
    },
    {
        value: "FirstRunTransitModeAcceptClick",
        label: "click 'Ok' on transit mode screen"
    },
    {
        value: "FirstRunTransitModeNextClick",
        label: "click 'Next' on transit mode screen"
    },
    {
        value: "FirstRunTransitModeCarClick",
        label: "click 'Car' on transit mode screen"
    },
    {
        value: "FirstRunTransitModeMotorcycleClick",
        label: "click 'Motorcycle' on transit mode screen"
    },
    {
        value: "FirstRunTransitModeRVClick",
        label: "click 'RV' on transit mode screen"
    },
    {
        value: "FirstRunTransitModeTruckClick",
        label: "click 'Truck' on transit mode screen"
    },
    {
        value: "FirstRunUnitsAcceptClick",
        label: "click 'Ok' on units screen"
    },
    {
        value: "FirstRunUnitsMetricClick",
        label: "click 'Metric' on units screen"
    },
    {
        value: "FirstRunUnitsUKClick",
        label: "click 'UK' on units screen"
    },
    {
        value: "FirstRunUnitsUSClick",
        label: "click 'US' on units screen"
    },
    {
        value: "",
        label: "Search Screen"
    },
    {
        value: "SearchView",
        label: "view of search screen"
    },
    {
        value: "SearchRunSearchClick",
        label: "click to run search"
    },
    {
        value: "SearchHelpClick",
        label: "click on help button"
    },
    {
        value: "SearchLocationPromptCloseClick",
        label: "click to close location prompt"
    },
    {
        value: "SearchOptionsClick",
        label: "click on options button"
    },
    {
        value: "SearchCurrentLocationClick",
        label: "click on current location button"
    },
    {
        value: "SearchDeleteDestinationClick",
        label: "click on delete destination button"
    },
    {
        value: "SearchLocationSwapClick",
        label: "click on swap locations button"
    },
    {
        value: "SearchAddDestinationClick",
        label: "click on add destination button"
    },
    {
        value: "SearchSuggestionSelectionClick",
        label: "click on input autosuggestion"
    },
    {
        value: "SearchUpgradesClick",
        label: "click on 'Upgrades' button"
    },
    {
        value: "SearchForecastsClick",
        label: "click to 'See Forecasts' button"
    },
    {
        value: "SearchOtherRoutesClick",
        label: "click on 'See other routes' button"
    },
    {
        value: "SearchRecentSearchesClick",
        label: "click on 'Recent Searches' button"
    },
    {
        value: "SearchRecentSearchesView",
        label: "view recent searches prompt"
    },
    {
        value: "SearchRecentSearchesSelectionClick",
        label: "click on recent search selection"
    },
    {
        value: "SearchRecentSearchesCloseClick",
        label: "click to close recent searches prompt"
    },
    {
        value: "SearchDeleteRecentClick",
        label: "click to delete recent search entry"
    },
    {
        value: "SearchRouteSelectionClick",
        label: "click on a route selection button"
    },
    {
        value: "SearchRouteErrorView",
        label: "view of route search error"
    },
    {
        value: "SearchRouteErrorDismissClick",
        label: "click to dismiss route search error"
    },
    {
        value: "SearchForecastErrorView",
        label: "view of forecast search error"
    },
    {
        value: "SearchForecastErrorDismissClick",
        label: "click to dismiss forecast search error"
    },
    {
        value: "SearchAppUpdateBannerView",
        label: "view of app update banner"
    },
    {
        value: "SearchAppUpdateView",
        label: "view of app update prompt"
    },
    {
        value: "SearchManifestUpdateView",
        label: "view of manifest/background update prompt"
    },
    {
        value: "SearchAppUpdateOkClick",
        label: "click 'OK' to get app update"
    },
    {
        value: "SearchAppUpdateDismissClick",
        label: "click to dismiss app update prompt"
    },
    {
        value: "SearchManifestUpdateOkClick",
        label: "click 'OK' on background/manifest update"
    },
    {
        value: "SearchNPSView",
        label: "view of NPS prompt"
    },
    {
        value: "SearchNPSNextClick",
        label: "click 'Next' on NPS prompt"
    },
    {
        value: "SearchNPSDoneClick",
        label: "click 'Done' on NPS prompt"
    },
    {
        value: "SearchNPSDismissClick",
        label: "click to dismiss NPS prompt"
    },
    {
        value: "SearchInterviewRequestView",
        label: "view of interview prompt"
    },
    {
        value: "SearchInterviewRequestOkClick",
        label: "click 'OK' on interview prompt"
    },
    {
        value: "SearchInterviewRequestDismissClick",
        label: "click to dismiss interview prompt"
    },
    {
        value: "SearchReviewAppView",
        label: "view of review app prompt"
    },
    {
        value: "SearchReviewAppOkClick",
        label: "click 'OK' to review app"
    },
    {
        value: "SearchReviewAppDismissClick",
        label: "click to dismiss review app prompt"
    },
    {
        value: "SearchSubscriptionPromptView",
        label: "view prompt for subscription"
    },
    {
        value: "SearchSubscriptionPromptDismissClick",
        label: "click to close with no action on prompt for subscription"
    },
    {
        value: "SearchSubscriptionPromptLearnMoreClick",
        label: "click 'learn more' on prompt for subscription"
    },
    {
        value: "SearchSurveyView",
        label: "view of survey prompt"
    },
    {
        value: "SearchSurveyOkClick",
        label: "click 'OK' to open survey"
    },
    {
        value: "SearchSurveyDismissClick",
        label: "click to dismiss survey prompt"
    },
    {
        value: "",
        label: "Route Selection Screen"
    },
    {
        value: "AlternateRoutesView",
        label: "view of route selection screen"
    },
    {
        value: "AlternateRoutesRouteSelectionClick",
        label: "click a route selection"
    },
    {
        value: "AlternateRoutesBackToSearchClick",
        label: "click 'Back to Search'"
    },
    {
        value: "AlternateRoutesPlanAheadClick",
        label: "click 'Plan Ahead'"
    },
    {
        value: "AlternateRoutesDriveNowClick",
        label: "click 'Drive Now'"
    },
    {
        value: "AlternateRoutesLocationPromptView",
        label: "view prompt for location permissions"
    },
    {
        value: "AlternateRoutesLocationPromptCloseClick",
        label: "click to close with no action on prompt for location permissions"
    },
    {
        value: "AlternateRoutesSubscriptionPromptView",
        label: "view prompt for subscription"
    },
    {
        value: "AlternateRoutesSubscriptionPromptDismissClick",
        label: "click to close with no action on prompt for subscription"
    },
    {
        value: "AlternateRoutesSubscriptionPromptLearnMoreClick",
        label: "click 'learn more' on prompt for subscription"
    },
    {
        value: "",
        label: "Plan Ahead Screen"
    },
    {
        value: "PlanAheadView",
        label: "view of plan ahead screen"
    },
    {
        value: "PlanAheadBackToSearchClick",
        label: "click to close Plan Ahead screen"
    },
    {
        value: "PlanAheadBestTimePromptView",
        label: "view best time summary prompt"
    },
    {
        value: "PlanAheadBestTimePromptDismissClick",
        label: "click to close of best time summary prompt"
    },
    {
        value: "PlanAheadDriveNowClick",
        label: "click 'Drive Now' button"
    },
    {
        value: "PlanAheadTimeSliderClick",
        label: "click/slide on time slider"
    },
    {
        value: "PlanAheadTabDetailsClick",
        label: "click on 'Details' tab"
    },
    {
        value: "PlanAheadDetailsView",
        label: "view detailed/hourly forecasts tab"
    },
    {
        value: "PlanAheadTabMapClick",
        label: "click on 'Map' tab"
    },
    {
        value: "PlanAheadMapView",
        label: "view of map tab"
    },
    {
        value: "PlanAheadTabExtendedClick",
        label: "click on 'Extended' tab"
    },
    {
        value: "PlanAheadExtendedView",
        label: "view extended forecasts tab"
    },
    {
        value: "PlanAheadDetailsAlertsExpandClick",
        label: "click to expand Details alert"
    },
    {
        value: "PlanAheadDetailsAlertsCollapseClick",
        label: "click to collapse Details alert"
    },
    {
        value: "PlanAheadDetailsRestStopAddClick",
        label: "click to add rest stop"
    },
    {
        value: "PlanAheadDetailsRestStopRemoveClick",
        label: "click to remove rest stop"
    },
    {
        value: "PlanAheadDetailsRestStopPlusClick",
        label: "click to add rest stop hour"
    },
    {
        value: "PlanAheadDetailsRestStopMinusClick",
        label: "click to remove rest stop hour"
    },
    {
        value: "PlanAheadLocationPromptView",
        label: "view of prompt for location permissions"
    },
    {
        value: "PlanAheadMapAlertsOpenClick",
        label: "click to open full-screen alerts from map"
    },
    {
        value: "PlanAheadMapAlertsView",
        label: "view of full-screen alerts"
    },
    {
        value: "PlanAheadMapAlertsDismissClick",
        label: "click to close full-screen alerts"
    },
    {
        value: "PlanAheadMapCameraView",
        label: "view of camera screen"
    },
    {
        value: "PlanAheadMapCameraDismissClick",
        label: "click to close camera screen"
    },
    {
        value: "PlanAheadMapCollapseClick",
        label: "click on 'Collapse' map button"
    },
    {
        value: "PlanAheadMapControlsCameraClick",
        label: "click on camera button on map"
    },
    {
        value: "PlanAheadMapLocationClick",
        label: "click on a forecast location on map"
    },
    {
        value: "PlanAheadMapShowControlsClick",
        label: "click to see map controls"
    },
    {
        value: "PlanAheadMapShowControlsCloseClick",
        label: "click to close map controls"
    },
    {
        value: "PlanAheadMapShowControlsView",
        label: "view of map controls"
    },
    {
        value: "PlanAheadOptionsClick",
        label: "click adjust speed link"
    },
    {
        value: "PlanAheadSharingCannotShare",
        label: "system prevents route sharing"
    },
    {
        value: "PlanAheadSharingCloseClick",
        label: "click to close route sharing"
    },
    {
        value: "PlanAheadSharingErrorView",
        label: "view of sharing error"
    },
    {
        value: "PlanAheadSharingShareClick",
        label: "click to save and share route"
    },
    {
        value: "PlanAheadSharingShowClick",
        label: "click to show route sharing"
    },
    {
        value: "PlanAheadSharingSuccessView",
        label: "view of route sharing success"
    },
    {
        value: "PlanAheadSharingView",
        label: "view of route sharing dialog"
    },
    {
        value: "PlanAheadStartHandsFreeClick",
        label: "click on the Hands Free button"
    },
    {
        value: "PlanAheadSubscriptionPromptView",
        label: "view of prompt for subscription"
    },
    {
        value: "PlanAheadSubscriptionPromptLearnMoreClick",
        label: "click 'Learn more' on subscription prompt"
    },
    {
        value: "PlanAheadSubscriptionPromptDismissClick",
        label: "click to close subscription prompt"
    },
    {
        value: "",
        label: "Drive Now Screen"
    },
    {
        value: "DriveNowView",
        label: "view of drive now screen"
    },
    {
        value: "DriveNowBackToSearchClick",
        label: "click to exit Drive Now"
    },
    {
        value: "DriveNowPauseClick",
        label: "click to pause Drive Now"
    },
    {
        value: "DriveNowResumeClick",
        label: "click to resume Drive Now"
    },
    {
        value: "DriveNowDetailsClick",
        label: "click to view details"
    },
    {
        value: "DriveNowDetailsView",
        label: "view of full-screen details"
    },
    {
        value: "DriveNowDetailsDismissClick",
        label: "click to close full-screen details"
    },
    {
        value: "DriveNowAlertsClick",
        label: "click to open full-screen alerts"
    },
    {
        value: "DriveNowAlertsView",
        label: "view of full-screen alerts"
    },
    {
        value: "DriveNowAlertsDismissClick",
        label: "click to close full-screen alerts"
    },
    {
        value: "DriveNowEulaView",
        label: "view of EULA prompt"
    },
    {
        value: "DriveNowEulaOkClick",
        label: "click 'Next' on EULA prompt"
    },
    {
        value: "DriveNowExplainer1View",
        label: "view of first Drive Now explainer prompt"
    },
    {
        value: "DriveNowExplainer1OkClick",
        label: "click 'Next' on first Drive Now explainer prompt"
    },
    {
        value: "DriveNowExplainer2View",
        label: "view of second Drive Now explainer prompt"
    },
    {
        value: "DriveNowExplainer2OkClick",
        label: "click 'Next' on second Drive Now explainer prompt"
    },
    {
        value: "DriveNowExitPromptView",
        label: "view of close Drive Now confirmation prompt"
    },
    {
        value: "DriveNowExitPromptOkClick",
        label: "click to confirm closing Drive Now"
    },
    {
        value: "DriveNowExitPromptDismissClick",
        label: "click to cancel closing Drive Now"
    },
    {
        value: "DriveNowMapControlsCameraClick",
        label: "click on camera button"
    },
    {
        value: "DriveNowMapCameraView",
        label: "view of camera screen"
    },
    {
        value: "DriveNowMapCameraDismissClick",
        label: "click to close camera screen"
    },
    {
        value: "",
        label: "Contact Support Screen"
    },
    {
        value: "SupportView",
        label: "view of contact support screen"
    },
    {
        value: "SupportSubmitClick",
        label: "click to submit support request"
    },
    {
        value: "SupportSuccessOkClick",
        label: "click to dismiss screen after success"
    },
    {
        value: "SupportCancelClick",
        label: "click to cancel request"
    },
    {
        value: "SupportExternalSendFeedbackClick",
        label: "click on direct email link"
    },
    {
        value: "SupportErrorView",
        label: "view of request submission error"
    },
    {
        value: "",
        label: "Options Screen"
    },
    {
        value: "OptionsView",
        label: "view options screen"
    },
    {
        value: "OptionsDismissClick",
        label: "click to close options screen"
    },
    {
        value: "OptionsUnitsMetricClick",
        label: "click on metric units"
    },
    {
        value: "OptionsUnitsUkClick",
        label: "click on UK units"
    },
    {
        value: "OptionsUnitsUsClick",
        label: "click on US units"
    },
    {
        value: "OptionsSpeedChangedClick",
        label: "click on speed setting"
    },
    {
        value: "OptionsTransitCarClick",
        label: "click on 'Car' transit mode"
    },
    {
        value: "OptionsTransitMotorcycleClick",
        label: "click on 'Motorcycle' transit mode"
    },
    {
        value: "OptionsTransitRVClick",
        label: "click on 'RV' transit mode"
    },
    {
        value: "OptionsTransitTruckClick",
        label: "click on 'Truck' transit mode"
    },
    {
        value: "OptionsDisplayDeviceClick",
        label: "click on 'Device' display mode"
    },
    {
        value: "OptionsDisplayDayClick",
        label: "click on 'Day' display mode"
    },
    {
        value: "OptionsDisplayNightClick",
        label: "click on 'Night' display mode"
    },
    {
        value: "OptionsContactEmailClick",
        label: "click on email button"
    },
    {
        value: "OptionsContactFacebookClick",
        label: "click on Facebook button"
    },
    {
        value: "OptionsContactInstagramClick",
        label: "click on Instagram button"
    },
    {
        value: "OptionsContactTwitterClick",
        label: "click on Twitter button"
    },
    {
        value: "OptionsDarkSkyClick",
        label: "click on Dark Sky link"
    },
    {
        value: "OptionsPrivacyTermsClick",
        label: "click on Privacy/ToS link"
    },
    {
        value: "",
        label: "In-App Purchase Screen"
    },
    {
        value: "IapView",
        label: "view IAP screen"
    },
    {
        value: "IapCloseClick",
        label: "click to close IAP screen"
    },
    {
        value: "IapRestoreClick",
        label: "click 'Restore'"
    },
    {
        value: "IapRestoreSucceededView",
        label: "view restore succeeded, purchases restored"
    },
    {
        value: "IapRestoreSucceededWithNoneView",
        label: "view restore succeeded, nothing to restore"
    },
    {
        value: "IapRestoreFailedView",
        label: "view restore failed"
    },
    {
        value: "IapPurchaseClick",
        label: "click 'Purchase'"
    },
    {
        value: "IapPurchaseSucceededView",
        label: "view new purchase succeeded"
    },
    {
        value: "IapPurchaseFailedView",
        label: "view new purchase failed"
    },
    {
        value: "IapPurchaseCanceledView",
        label: "view new purchase canceled"
    },
    {
        value: "",
        label: "Map Controls (any view)"
    },
    {
        value: "MapControlsAlertsClick",
        label: "click on severe alerts button"
    },
    {
        value: "MapControlsInfoClick",
        label: "click on detailed icons button"
    },
    {
        value: "MapControlsPrecipitationClick",
        label: "click on precipitation button"
    },
    {
        value: "MapControlsRadarOnClick",
        label: "click button to turn radar on"
    },
    {
        value: "MapControlsRadarOffClick",
        label: "click button to turn radar off"
    },
    {
        value: "MapControlsTemperatureClick",
        label: "click on temperature button"
    },
    {
        value: "MapControlsWindClick",
        label: "click on wind button"
    },
    {
        value: "MapControlsIconClick",
        label: "click on weather icons button"
    },
    {
        value: "",
        label: "Events From System/Device Layer"
    },
    {
        value: "AdClicked",
        label: "click on ad"
    },
    {
        value: "SystemIapPurchaseSucceeded",
        label: "IAP purchase succeeded"
    },
    {
        value: "SystemIapPurchaseCanceled",
        label: "IAP purchase was canceled"
    },
    {
        value: "SystemIapPurchaseFailed",
        label: "IAP purchase failed"
    },
    {
        value: "SystemIapRestoreSucceeded",
        label: "IAP restore succeeded"
    },
    {
        value: "SystemIapRestoreFailed",
        label: "IAP restore failed"
    },
    {
        value: "SystemLocationDetected",
        label: "location was detected"
    },
    {
        value: "SystemLocationLost",
        label: "location was lost"
    },
    {
        value: "SystemLocationPermitted",
        label: "location is permitted"
    },
    {
        value: "SystemLocationNotPermitted",
        label: "location is not permitted"
    },
    {
        value: "SystemOrientationLandscape",
        label: "orientation switched to landscape"
    },
    {
        value: "SystemOrientationPortrait",
        label: "orientation switched to portrait"
    },
    {
        value: "SystemTransitMethodCar",
        label: "transit mode switched to car"
    },
    {
        value: "SystemTransitMethodMotorcycle",
        label: "transit mode switched to motorcycle"
    },
    {
        value: "SystemTransitMethodRv",
        label: "transit mode switched to rv"
    },
    {
        value: "SystemTransitMethodTruck",
        label: "transit mode switched to truck"
    },
    {
        value: "SystemUnitsMetric",
        label: "units switched to Metric"
    },
    {
        value: "SystemUnitsUK",
        label: "units switched to UK"
    },
    {
        value: "SystemUnitsUS",
        label: "units switched to US"
    }
]

export const baseFilter = [
    {
        label: 'By User',
        value: 'userUuid'
    },
    {
        label: 'By Admin',
        value: 'sessionUuid'
    },
]
