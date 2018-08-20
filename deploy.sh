source /etc/profile
cnpm install
cnpm run build
mv ./dist/* /var/node_server/freelancer-server/app/public/
cd /var/node_server/freelancer-server/
npm run stop
npm run start