import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function GitHubContributionGraph() {
  return (
    <GitHubCalendar username="magnolianroot"
    
     />
  );
}


function CustomGitHubCalendar() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <GitHubCalendar
      username="magnolianroot"
      transformData={selectLastHalfYear}
      hideColorLegend
      hideMonthLabels
      hideTotalCount
      colorScheme="dark"
      fontSize={14}
      blockSize={15}
      blockMargin={5}
      loading={<p>Loading...</p>}
      errorMessage="Failed to load GitHub contributions"
    />
  );
}



export default GitHubContributionGraph;