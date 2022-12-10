import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

function navigate(routeName, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name: routeName,
        params: params,
      }),
    );
  }
}

function reset(routeName, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName, params: params}],
      }),
    );
  }
}

export const NavigationService = {
  navigate,
  reset,
};
