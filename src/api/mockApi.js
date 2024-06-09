export const fetchImagesByDifficulty = (difficulty) => {
  return Promise.resolve({
    image_id: "1",
    image_path: "/images/sample1.jpg",
    coordinates: { latitude: 37.7749, longitude: -122.4194 },
    difficulty: difficulty,
    address: "San Francisco, CA",
    timestamp: "2024-06-01T12:00:00Z",
  });
};
