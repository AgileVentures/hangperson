use Rack::Static, :urls => [""], :root => 'build', :index =>
'index.html'

run Proc.new { |env| ['200', {'Content-Type' => 'text/html'}, ['get rack\'d']] }