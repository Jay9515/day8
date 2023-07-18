function findPath(tickets) {
    const graph = {};
  
    for (const [from, to] of tickets) {
      if (!(from in graph)) {
        graph[from] = [];
      }
      graph[from].push(to);
    }

    for (const airport in graph) {
      graph[airport].sort();
    }
  
    const itinerary = [];
    const dfs = (airport) => {
      const destinations = graph[airport];
      while (destinations && destinations.length > 0) {
        dfs(destinations.shift());
      }
      itinerary.unshift(airport); 
    };
  
    dfs('A');
  
    return itinerary;
  }
  
  
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); // ➞ ["A", "C", "F", "I", "Z"]
  console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]])); // ➞ ["A","B","A","C","B","C"]
  console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]])); // ➞ ["A", "D", "A", "R", "Y", "L"]
  

  console.log(findPath([["C", "O"], ["A", "C"], ["O", "M"], ["M", "P"]])); 
  console.log(findPath([["A","C"],["A","B"],["A","D"],["A","E"],["C","A"]]));
  console.log(findPath([["C", "D"], ["D", "E"],["A", "B"], ["B", "C"], ["E", "F"]])); 
