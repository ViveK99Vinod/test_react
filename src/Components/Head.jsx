import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Head() {
  return (
    <div className="text-right container">
      <div className="row">
        <div className="col-8">
        
        </div>
        <div className="col-4">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {/* Add your button content here */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sign Out</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Switch Account</Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Head;
