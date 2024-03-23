export function filterData(SearchText, Resturant) {
    const filterDatav = Resturant.filter((Resturant) =>
      Resturant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
    );
  
    return filterDatav;
  }

