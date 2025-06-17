const EmptyState = () => (
  <div className="text-center py-16">
    <div className="text-gray-500 text-lg mb-2">No vehicles found</div>
    <div className="text-gray-400">
      Try adjusting your filters or searching a different ZIP code
    </div>
  </div>
);

export default EmptyState;
