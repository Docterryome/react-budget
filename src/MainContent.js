import React from 'react';
import staticContent from './staticContent';
import Content from './Content';



class MainContent extends React.Component {
    
    render(){
        const contentList = staticContent.map(item => <Content content={item} />);
        return (
            <div className="App">
                {contentList}
            </div>
        );
    }
}

export default MainContent;