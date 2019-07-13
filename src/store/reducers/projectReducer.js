const initState = {
    projects: [
        {id: '1', title: "Find a better job", content: "lorem  wdklawldkb  awdawdbjb adbajb"},
        {id: '2', title: "Buy a bike", content: "lorem  wdklawldkb  awdawdbjb adbajb "},
        {id: '3', title: "Stat to build your home", content: "lorem  wdklawldkb  awdawdbjb adbajb"}
    ]
}

const projectReducer = ( state= initState, action ) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
          console.log('create project success', action.project);
          return state;
        case 'CREATE_PROJECT_ERROR':
          console.log('create project error', action.err);
          return state;
        default:
          return state;
      }
}

export default projectReducer;