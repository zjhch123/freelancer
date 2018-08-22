source /etc/profile
cnpm install
cnpm run build
cd /var/node_server/freelancer-server/app/public/
rm -rf `ls | egrep -v '(upload|admin)'`
mv /var/packages/freelancer/dist/* /var/node_server/freelancer-server/app/public/
cd /var/node_server/freelancer-server/
npm run stop
npm run start