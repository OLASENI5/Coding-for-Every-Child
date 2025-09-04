export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Code Mining Initiatives (CMIA). All rights reserved.</p>
      </div>
    </footer>
  )
}
