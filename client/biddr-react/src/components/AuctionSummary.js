import React from 'react';
 import {Link} from 'react-router-dom';

 function AuctionSummary (props) {
   const {id, title, created_at, user_id} = props;



   return (
     <div className="QuestionSummary">
       <Link to={`/auctions/${id}`}>{title}</Link> • {created_at}
     </div>
   );
 }

 export default AuctionSummary;
